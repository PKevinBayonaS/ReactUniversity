
const user1={
    //name: 'Kevin Bayona',
    username:'pkevinbs',
    country:'Mexico',
    social:{
        facebook:'https://fb....',
        twitter: 'https://tw....'
    }
}

const saluda = (user) =>{
    //const saluda = ({username: nusuario, social:{twitter: tw}})=>{
    //si quisieramos tener un codigo mas limpio que al usar
    //las propiedades de las siguiente manera ${user.name}
    //podriamos hacer con var, let, const
    //const name=user.name
    //const country = user.country
    //con destructuracion podriamos hacerlo de la siguiente 
    //manera
    //const {name, country, social} = user
    //y extraemos los objetos en social
    //const {twiter} = social
    //o podemos realizar destructuracion anidada
    //const {name, social:{twitter}} = user
    //tambien podemos declarar propiedades en caso de que
    //estas no se encuentren de la siguiente manera
    //const {name = 'P. Kevin Bayona', social:{twitter}} = user
    //o bien cambiar el nombre de una propiedad
    //const {username: nusuario, social:{twitter: tw}} = user
    //todo lo anterior podriamos pasarlo directo al parametro que recivimos
    const {username: nusuario, social:{twitter: tw}} = user
    const orden =['pizza', 'te verde', 'pay', 124, false, 'otros']
    const [comida, bebida, postre, ...restantes] = orden
    console.log(`Hola soy ${nusuario} me gusta la ${comida}`);
    console.log(restantes);
}

saluda(user1);