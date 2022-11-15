function Greetings({lang, children}) {
    return (
        if ({lang} == 'en') {
            <p>Hello</p>
        };
        if ({lang} == 'de') {
<p>Hallo</p>
        };
        if ({lang} == 'fr') {
            <p>Bonjour</p>
        };if ({lang} == 'es') {
            <p>Hola</p>
        };
    )
}
export default Greetings;