import { useParams } from 'react-router';

export default function Quiz() {
    const { type } = useParams();

    return <div>{type}</div>;
}
