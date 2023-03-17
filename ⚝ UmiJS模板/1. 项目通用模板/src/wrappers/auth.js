import { useAuth } from '@/hooks';
import { Redirect } from 'umi';

export default (props) => {
  const { isLogin } = useAuth();
  if (isLogin) {
    return props.children;
  } else {
    return <Redirect to="/login" />;
  }
};
