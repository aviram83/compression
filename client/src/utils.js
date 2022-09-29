export const compress = (transactions) => {
    const compressed = {};

    transactions.forEach(transaction => {
        const { tradingParty, counterParty, amount } = transaction;
        if (!compressed[tradingParty]) {
            compressed[transaction.tradingParty] = {
                [counterParty]: amount
            }
        } else if (!compressed[tradingParty][counterParty]) {
            compressed[tradingParty][counterParty] = amount;
        } else {
            compressed[tradingParty][counterParty] += amount;
        }
    });

    const result = [];

    Object.keys(compressed).forEach(counterParty => {
        Object.keys(compressed[counterParty]).forEach(tradingParty => {
            result.push({
                tradingParty,
                counterParty,
                amount: compressed[counterParty][tradingParty]
            })
        })
    })

    return result;
}

export const exportToCSV = (dataAsArray) => {
    const csvMaker = function (data) {
        const csvRows = [];
        const headers = Object.keys(data[0]);

        csvRows.push(headers.join(','));

        data.forEach(row => {
            const values = Object.values(row).join(',');
            csvRows.push(values)
        });

        return csvRows.join('\n')
    }

    const download = function (data) {
        const blob = new Blob([data], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')

        a.setAttribute('href', url)
        a.setAttribute('download', 'download.csv');
        a.click()
    }

    const csvdata = csvMaker(dataAsArray);
    download(csvdata);
}