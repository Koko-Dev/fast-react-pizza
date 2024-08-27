export function formatCurrency( value ) {
    return new Intl.NumberFormat( 'en-US', {
        style: 'currency', currency: 'USD',
    } ).format( value );
}


export function formatDate( dateStr ) {
    return new Intl.DateTimeFormat( 'en-US', {
        day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit',
    } ).format( new Date( dateStr ) );
}