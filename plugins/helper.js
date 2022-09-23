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

function formatDateNothing (date) {
    console.log('date', date)
    if (date === ' ' || date === undefined) {
        return '-'
    } else {
        const year = date.substring(0, 4)
        const month = date.substring(4, 6)
        const day = date.substring(6, 8)
        return year + '.' + month + '.' + day
    }
}

function movieState (value) {
    if (value === '개봉') {
        return 'w3-green'
    } else {
        return 'w3-black'
    }
}
export default ({ app }, inject) => {
    inject('NumberFormat', NumberFormat)
    inject('searchColor', searchColor)
    inject('formatDate', formatDate)
    inject('movieState', movieState)
    inject('formatDateNothing', formatDateNothing)
}
