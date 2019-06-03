export const makeDataReadyToPrint = data => {
    let common = []
    data.forEach(element => {
        switch (element.queryTitle) {
            case 'Vendors by group':
                const groupStrings = element.vendorsByGroups.map(groupUnit => {
                    const firstKey = Object.keys(groupUnit)[0]
                    return ` ${firstKey}: ${groupUnit[firstKey]} \r\n`
                })
                common.push(`${element.queryTitle}: \r\n${[...groupStrings]}\r\n\r\n`)
                break;

            case 'Total revenues':
                const totalRevenues = element.totalRevenues
                const currencyStrings = Object.keys(totalRevenues).map(revenueKey => {
                    return (revenueKey.indexOf('dollar') !== 1)
                    ? ` ${revenueKey}: ${totalRevenues[revenueKey]}$ \r\n`
                    : ` ${revenueKey}: ${totalRevenues[revenueKey]}€ \r\n`
                })
                common.push(`${element.queryTitle}: \r\n${[...currencyStrings]}\r\n\r\n`)
                break;

            default:
                common.push(`${element.queryTitle}: ${element[Object.keys(element)[0]]}\r\n\r\n`)
                break;
        }
    });

    return common.toString().split(',').join('')
}