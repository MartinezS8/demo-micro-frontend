import React from 'react';

interface Comment {
    id: string;
    text: string;
    author: string;
}

/**
 * CommentSection-Komponente:
 * Zeigt eine Liste von Kommentaren für ein Event an.
 */
const CommentSection: React.FC<{ comments: Comment[] }> = ({ comments }) => {
    return (
        <div className="mt-4">
            <h4 className="font-bold">Kommentare</h4>
            {comments.map((comment) => (
                <div key={comment.id} className="border-b py-2">
                    <p className="text-sm">{comment.text}</p>
                    <span className="text-xs text-gray-500">– {comment.author}</span>
                </div>
            ))}
        </div>
    );
};

export default CommentSection;
