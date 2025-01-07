import ConnectedHeader from './ConnectedHeader';
import Header from './Header';
import useAuthToken from '@/hooks/useAuthToken';

export default function UsedHeader() {
    const { token } = useAuthToken();

    if (token) {
        return <ConnectedHeader />;
    }

    return <Header />;
}
