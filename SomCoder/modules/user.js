export const user = { name: "Alpha university" };
export const greeting = "Hello All student";

export { user as u, greeting as gr }

let getUser = function getUsername() {
    return user.name;
}