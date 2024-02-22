export const isAuEmail = (email, first, last) => {
    email = email.toLowerCase()
    first = first.toLowerCase();
    last = last.toLowerCase();

    const firstNameInitial = email[0]
    const lastNameInitial = email[1]
    const emailTag = email.split('@')[1]
    const auTag = 'aurora.edu'

    return first[0] === firstNameInitial && lastNameInitial === last[0] && emailTag.toLowerCase() === auTag;
}