const locale = navigator.language;

const mediumDateFormatter = new Intl.DateTimeFormat(locale, {
    dateStyle: 'medium',
})

const longDateFormatter = new Intl.DateTimeFormat(locale, {
    dateStyle: 'long',
})

export const formatDate = (date: Date, style: 'medium' | 'long' = 'medium') => {
    const dateTime = new Date(date)
    return style === 'medium' ? mediumDateFormatter.format(dateTime) : longDateFormatter.format(dateTime)
}

