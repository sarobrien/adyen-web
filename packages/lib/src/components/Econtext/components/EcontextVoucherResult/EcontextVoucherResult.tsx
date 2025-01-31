import { h } from 'preact';
import Voucher from '../../../internal/Voucher';

import useCoreContext from '../../../../core/Context/useCoreContext';
import { EcontextVoucherResultProps } from '../../types';
import useImage from '../../../../core/Context/useImage';

const EcontextVoucherResult = (props: EcontextVoucherResultProps) => {
    const { reference, totalAmount, expiresAt, paymentMethodType, maskedTelephoneNumber, instructionsUrl, collectionInstitutionNumber } = props;
    const { i18n } = useCoreContext();
    const getImage = useImage();

    return (
        <Voucher
            paymentMethodType={paymentMethodType}
            reference={reference}
            introduction={i18n.get('voucher.introduction.econtext')}
            imageUrl={getImage({})(paymentMethodType)}
            instructionsUrl={instructionsUrl}
            amount={totalAmount && i18n.amount(totalAmount.value, totalAmount.currency)}
            voucherDetails={[
                { label: i18n.get('voucher.collectionInstitutionNumber'), value: collectionInstitutionNumber },
                { label: i18n.get('voucher.expirationDate'), value: i18n.date(expiresAt) },
                { label: i18n.get('voucher.telephoneNumber'), value: maskedTelephoneNumber }
            ]}
            copyBtn
        />
    );
};

export default EcontextVoucherResult;
