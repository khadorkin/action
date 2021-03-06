import React, {PropTypes} from 'react';
import Layout from '../../components/Layout/Layout';
import Callout from '../../components/Callout/Callout';
import ContactUs from '../../components/ContactUs/ContactUs';
import EmptySpace from '../../components/EmptySpace/EmptySpace';
import Features from '../../components/Features/Features';
import GetStarted from '../../components/GetStarted/GetStarted';
import Body from '../../components/Body/Body';
import Footer from '../../components/Footer/Footer';
import theme from 'universal/styles/theme';

const imageStyle = {
  border: 0,
  display: 'block'
};

const ruleStyle = {
  backgroundColor: '#E1E2E8',
  border: 0,
  height: '2px',
  margin: 0,
  width: '80%'
};

const WelcomeEmail = props => {
  const {email} = props;

  return (
    <Layout>

      <table width="100%">
        <tbody>
          <tr>
            <td
              align="center"
              style={{backgroundColor: theme.palette.warm}}
            >
              <img
                style={imageStyle}
                src="/static/images/email/action-email-header@2x.png"
                height="128"
                width="600"
              />
            </td>
          </tr>
        </tbody>
      </table>

      <Body lineHeight={1.5}>
        <Callout vSpacing={0}>
          Hi <span style={{color: theme.palette.warm}}>{email}</span>,<br />
          We’re <i>so glad</i> you’re here!!
        </Callout>
        <EmptySpace height={48} />
        <b>Action</b> is a place where you can:
        <EmptySpace height={32} />
        <Features vSpacing={0} />
        <EmptySpace height={32} />
        <GetStarted />
        <EmptySpace height={32} />
        <hr style={ruleStyle} />
        <EmptySpace height={32} />
        <ContactUs fontSize={18} lineHeight={1.5} vSpacing={0} />
      </Body>
      <Footer color={theme.palette.dark} />
    </Layout>
  );
};

WelcomeEmail.propTypes = {
  email: PropTypes.string.isRequired
};

// TODO: add props, and make me dynamic!!
export const welcomeEmailText = (props) => `
Hello ${props.email},

Thank you for signing up for Action!

Greater team momentum is only a few clicks away. Can you feel it? It's
like a refreshing breeze through your hair.

Your pal,

--
Action Hero
`;

export default WelcomeEmail;
