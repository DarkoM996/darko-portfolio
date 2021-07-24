import styles from '../../styles/Back.module.scss';
import { useRouter } from 'next/router';

const Back = () => {
  const router = useRouter();
  const handleBackToPreviousPage = () => {
    router.back();
    console.log('Clicked');
  };
  return (
    <div className={styles.back}>
      <button className={styles.backButton} onClick={handleBackToPreviousPage}>
        DM
      </button>
    </div>
  );
};

export default Back;
