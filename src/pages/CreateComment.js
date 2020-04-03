import React from 'react';

const CreateComment = () => {
    return (
        <form>
            <input
                type="text"
                name="article_id"
                placeholder="Id de l'article"
            />
            <textarea
                type="textarea"
                name="content"
                placeholder="Contenu du commentaire"
            >
            </textarea>
            <input
                type="number"
                name="author"
                placeholder="Id de l'auteur"
            />
            <button type="submit">Créer un commentaire</button>
        </form>
    );
}

export default CreateComment;