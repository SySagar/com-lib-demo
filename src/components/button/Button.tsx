import './Button.css'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
  }

const Button = ({ variant, ...props }:ButtonProps) => {
    const styles = () => {
        const propStyle = props.style ?? {};
        if (props.disabled) return propStyle;
        if (variant === 'primary') return { borderColor: '#232946', backgroundColor: '#232946', color: '#fffffe', ...propStyle };
        if (variant === 'secondary') return { borderColor: '#232946', backgroundColor: '#fffffe', color: '#232946', ...propStyle };
        return propStyle;
      };
  
    return (
  <button {...props} style={styles()}>
      {props.children}
    </button>
  )
}

export default Button;