import styles from './Collapsable.module.css';
import { createSignal } from 'solid-js';
import ChevronIcon from '../assets/chevron-up.svg'
import { Show } from 'solid-js';

function Collapsable({ title, children }) {
  const [open, setOpen] = createSignal(false);

  return (
    <div classList={{ [styles.Collapsable]: true, [styles.open]: open() }}>
      <div class={styles.header} role='button' onClick={(e) => setOpen(!open())}>
        <h3 class={styles.title}>{title}</h3>
        <img
          class={styles.icon}
          src={ChevronIcon}
          alt=''
        />
      </div>
      <div class={styles.content}>
        {children}
      </div>
    </div>
  );
}

export default Collapsable;
