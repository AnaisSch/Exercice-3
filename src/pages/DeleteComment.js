import React from 'react';

const DeleteComment = () => {
    return (
        <form>
            <input
                type="number"
                name="id"
                placeholder="Id du commentaire"
            />
            <button type="submit">Supprimer un commentaire</button>
        </form>
    );
}

export default DeleteComment;