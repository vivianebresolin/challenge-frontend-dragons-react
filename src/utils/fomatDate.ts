export function formatDate(date: string) {
    const dateFormatted = new Intl.DateTimeFormat('pt-BR').format(new Date(date));
    return dateFormatted;
}