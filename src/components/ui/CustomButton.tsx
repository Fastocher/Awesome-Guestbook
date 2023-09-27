import { styled } from "@mui/material";
import { Button, ButtonProps } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useMemo } from "react";

const CustomButton = (props: ButtonProps) => {
    const theme = useTheme();

    const ColorButton = useMemo(() => {
        let currentStyle = {};
        const palette = theme.palette;

        const containedStyle = {
            color: palette.getContrastText(palette.primary.main),
            backgroundColor: palette.primary.main,
            "&:hover": {
                backgroundColor: palette.primary.main,
            },
        };

        const outlinedButton = {
            color: palette.primary.main,
            borderColor: palette.primary.light,
            ":hover": {
                borderColor: palette.primary.light,
            },
        };

        switch (props.variant) {
            case "outlined":
                currentStyle = outlinedButton;
                break;

            default:
                currentStyle = containedStyle;
                break;
        }
        
        const ColorButton = styled(Button)<ButtonProps>(() => currentStyle);

        return ColorButton;
    }, [props.variant, theme.palette]);

    return <ColorButton {...props}>{props.children}</ColorButton>;
};

export default CustomButton;
