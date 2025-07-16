import type { FC, ReactNode } from 'react';
import { motion } from 'framer-motion'

interface ButtonProps extends React.ComponentProps<"button"> {
    children: ReactNode
}

const Button: FC<ButtonProps> = ({ children, ...props }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5 , duration:0.7}}
        >
            <button {...props}>
                {children}
            </button>
        </motion.div >
    );
}

export default Button;
