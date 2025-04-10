import { Form, Formik } from "formik";
import { loginSchema } from "../schemas";
import FormInput from "../components/FormInput";
import users from "../users.json"
import { useDispatch } from "react-redux";
import { login } from "../store/userSlice";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/Authcontext";
import { useContext } from "react";

const LoginForm = () => {
  const {setIsLoginPage} = useContext(AuthContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (values, actions) => {
    const { email, password } = values;
    const user = users.find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      dispatch(login({
        email: user.email,
        id: user.id,
        expenseStatistics: user.expenseStatistics,
        weeklyActivity: user.weeklyActivity
      }));
      localStorage.setItem('user', JSON.stringify({
        email: user.email,
        id: user.id
      }));
        localStorage.setItem('isAuthenticated', 'true');
        setIsLoginPage(false);
      navigate("/");
    }
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={loginSchema}
      onSubmit={onSubmit}
    >
      {({isSubmitting}) => (
        <Form className="d-flex flex-column justify-content-center align-items-center">
          <FormInput
            label="Email:"
            name="email"
            type="text"
            placeholder="Email"
          />
          <FormInput
            label="Password:"
            name="password"
            type="password"
            placeholder="Password"
          />
          <button disabled={isSubmitting} type="submit" className="bg-transaction-green w-25 p-2 rounded fs-20 border-0 mt-15" style={{maxWidth:'390px', minWidth:'150px'}}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;