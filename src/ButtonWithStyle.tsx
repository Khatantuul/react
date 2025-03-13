interface ButtonStyleProps{
    borderRadius: Record<string, number>
}

type ButtonProps = ButtonStyleProps & React.ComponentPropsWithRef<'button'>

export default function ButtonWithStyle({borderRadius, ref, ...rest}: ButtonProps){
    console.log(ref);
    
    return (
        <>
        <div>
            <button ref={ref} {...rest} style={{borderRadius: `${borderRadius.topLeft}px ${borderRadius.topRight}px ${borderRadius.bottomRight}px ${borderRadius.bottomLeft}px`}}>Style button</button>
        </div>
        </>
    );
}