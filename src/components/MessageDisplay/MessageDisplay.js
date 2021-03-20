import { Icon, Message } from "semantic-ui-react";

const MessageDisplay = ({ children, header, icon, ...restProps }) => {
  return (
    <Message icon={icon ? true : false} {...restProps}>
      {icon && <Icon name={icon} />}
      <Message.Content>
        <Message.Header>{header}</Message.Header>
        {children}
      </Message.Content>
    </Message>
  );
};
export default MessageDisplay;
