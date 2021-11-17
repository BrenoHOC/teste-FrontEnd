export function number_format(number: number) {

    const cleaned = ('' + number).replace(/\D/g, '');

    const match = cleaned.match(/^(\d{2})(\d{2})(\d{4})(\d{4})/);

    if (match) {
      return match[2] + ' ' + match[3] + '-' + match[4];
    }
    
    return null;
}