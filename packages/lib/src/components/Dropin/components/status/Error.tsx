import { h } from 'preact';

import Img from '../../../internal/Img';
import useCoreContext from '../../../../core/Context/useCoreContext';
import useImage from '../../../../core/Context/useImage';

const Error = ({ message }) => {
    const { loadingContext, i18n } = useCoreContext();
    const getImage = useImage();

    return (
        <div className="adyen-checkout__status adyen-checkout__status--error">
            <Img
                className="adyen-checkout__status__icon"
                src={getImage({ loadingContext, extension: 'gif', imageFolder: 'components/' })('error')}
                alt={i18n.get(message || 'error.message.unknown')}
                height="88"
            />
            <span className="adyen-checkout__status__text">{i18n.get(message || 'error.message.unknown')}</span>
        </div>
    );
};

export default Error;
