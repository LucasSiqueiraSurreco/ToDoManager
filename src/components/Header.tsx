import todoLogo from '../assets/todoLogo.svg'
import styles from './header.module.css'

import { PlusCircle } from 'phosphor-react'

import { FormEvent, useState, ChangeEvent } from 'react'

interface Props {
    onAddTask: (taskTitle: string) => void;
}

export function Header({ onAddTask }: Props) {
    const [title, setTitle] = useState("");

    function handleSubmit(event: FormEvent) {
        event.preventDefault();

        onAddTask(title);
        setTitle("");
    }

    function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('');
        setTitle(event.target.value);
    }


    const isNewCommentEmpty = title.length === 0;

    return (
        <header className={styles.header}>
            <img src={todoLogo} />

            <form className={styles.newTaskForm} onSubmit={handleSubmit}>
                <input placeholder="Adicione uma nova tarefa"
                    onChange={onChangeTitle}
                    value={title}
                    required
                />
                <button type='submit' disabled={isNewCommentEmpty}>
                    Criar
                    <PlusCircle size={20} />
                </button>
            </form>
        </header>
    )
}