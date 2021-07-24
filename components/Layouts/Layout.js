import Back from '../Back/Back';

const Layout = (props) => (
  <div>
    <Back />
    {props.children}
  </div>
);

export default Layout;
