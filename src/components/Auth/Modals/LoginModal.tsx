import { useNavigate } from 'react-router';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogClose,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

export default function LoginModal({
    loginStatus,
    loginMessage,
    open,
    onOpenChange,
    onClose,
    colorTitle,
    buttonColor,
}: {
    loginStatus: string;
    loginMessage: string;
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onClose: () => void;
    colorTitle: string;
    buttonColor: string;
}) {
    const navigate = useNavigate();

    const handleNavigate = () => {
        if (loginStatus === 'Connexion réussie') {
            navigate('/compte');
        } else {
            navigate('/connexion');
        }
    };
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className={colorTitle}>
                        {loginStatus}
                    </DialogTitle>
                    <DialogDescription>{loginMessage}</DialogDescription>
                </DialogHeader>
                <DialogClose asChild>
                    <div className='flex h-full justify-end'>
                        <Button
                            className={`${buttonColor} w-1/3`}
                            onClick={() => {
                                handleNavigate();
                                onOpenChange(false);
                                onClose();
                            }}
                        >
                            Fermer
                        </Button>
                    </div>
                </DialogClose>
            </DialogContent>
        </Dialog>
    );
}
