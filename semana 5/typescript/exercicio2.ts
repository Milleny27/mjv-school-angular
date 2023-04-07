// Melhore esse tipo utilizando uma união discriminada de tipos mais específicos
/*
export type User = {
    name: string;
    email?: string;
    registered: boolean;
}
*/

export type Usuario = {
    name: string;
    email: string;
    registered: true;
}

export type NaoUsuario = {
    name: string;
    registered: false;
}

export type User = Usuario | NaoUsuario;

function test(user: User) {
    if(user.registered) {
        user.email
    } else {
        user
    }
}