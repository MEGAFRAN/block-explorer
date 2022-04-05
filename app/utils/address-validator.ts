export const addressValidator = (isAddressValid: boolean, isNeededResponse: boolean, setAddressData:any, response?: object): void =>
{
    const ADDRESS_ERROR_MESSAGE: string = 'Error: Please verify that the specified address is valid in the selected blockchain'

    isAddressValid && isNeededResponse ? setAddressData(response) : setAddressData({ error: ADDRESS_ERROR_MESSAGE })
    isAddressValid ? setAddressData('') : setAddressData({ error: ADDRESS_ERROR_MESSAGE })

}