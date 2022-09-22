function NumberFormat (value) {
    return value.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
}

function searchColor (value) {
    if (Number(value) > 0) {
        return 'up'
    } else if (Number(value) === 0) {
        return 'same'
    } else {
        return 'down'
    }
}

function formatDate (date) {
    if (date === ' ') {
        return '-'
    } else {
        const year = date.substring(0, 4)
        const month = date.substring(5, 7)
        const day = date.substring(8, 10)
        return year + '.' + month + '.' + day
    }
}

export default ({ app }, inject) => {
    inject('NumberFormat', NumberFormat)
    inject('searchColor', searchColor)
    inject('formatDate', formatDate)
}
