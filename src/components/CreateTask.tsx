import styles from './createTask.module.css'
import { Trash, CheckCircle } from 'phosphor-react'
import { ITask } from '../App';

interface Props {
    task: ITask;
    onDelete: (TaskId: string) => void;
    onComplete: (TaskId: string) => void;

}

export function CreateTask({ task, onDelete, onComplete }: Props) {
    return (
        <div className={styles.task}>
            <button
                className={styles.checkContainer}
                onClick={() => onComplete(task.id)}>
                {task.isCompleted ? <CheckCircle /> : <div />}
            </button>
            <p className={task.isCompleted ? styles.textCompleted : ""}>
                {task.title}
            </p>

            <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
                <Trash size={20} />
            </button>
        </div>
    )
}