import { Bank, CreditCard, Money } from 'phosphor-react'
import { CustomPaymentInput } from '../../../../components/CustomPaymentInput'
import { PaymentOptionsContainer } from './styles'

export const paymentMethods = {
  credit: {
    label: 'Cartão de crédito',
    icon: <CreditCard size={16} />,
  },
  debit: {
    label: 'Cartão de débito',
    icon: <Bank size={16} />,
  },
  money: {
    label: 'Dinheiro',
    icon: <Money size={16} />,
  },
}

export function PaymentOptions() {
  return (
    <PaymentOptionsContainer>
      {Object.entries(paymentMethods).map(([key, { label, icon }]) => (
        <CustomPaymentInput
          key={label}
          id={key}
          icon={icon}
          label={label}
          value={key}
        />
      ))}
    </PaymentOptionsContainer>
  )
}