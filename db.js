conn = new Mongo();

db = conn.getDB('tecsupdb');
db.usuarios.insert(
    [
        {nombre:'James',
        apellido:'Farfan',
        email: 'jfarfan@abc.com',
        estado: 'A', 
        created_at: new Date ('07/01/2020')}
    ]
);