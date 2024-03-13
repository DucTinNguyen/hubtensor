export const sliceAddress = (address: string) => {
    if (!address) return;
    return address.slice(0, 5) + '...' + address.slice(address.length - 5, address.length)
}
