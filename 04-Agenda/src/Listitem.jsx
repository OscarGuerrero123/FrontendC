const ListItem =({nombre, telefono, email}) => {
    return (
        <li>
        {nombre}:
        <ul>
            <li>Telefono: {telefono}</li>
            <li>Correo: {email}</li>
        </ul>
        </li>
    )
}

export default ListItem