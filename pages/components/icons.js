import Camera from '../icons/camera';
import Pets from '../icons/pets';
import Restaurant from '../icons/restaurant';
import Savings from '../icons/savings';
import Wallet from '../icons/wallet';
import Celebration from '../icons/celebration';

const Icons = ({ icon, handleIcon, active }) => {
    switch(icon) {
        case 'camera': return (<Camera active={active} onClick={() => handleIcon(icon)} />);
        case 'pets': return (<Pets active={active} onClick={() => handleIcon(icon)} />);
        case 'restaurant': return (<Restaurant active={active} onClick={() => handleIcon(icon)} />);
        case 'savings': return <Savings active={active} onClick={() => handleIcon(icon)} />;
        case 'wallet': return <Wallet active={active} onClick={() => handleIcon(icon)} />;
        case 'celebration': return <Celebration active={active} onClick={() => handleIcon(icon)} />;
        default: return (<div />)
    }
}

export default Icons;
