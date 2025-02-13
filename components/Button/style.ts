import { Platform } from "react-native";
import { createStyleSheet } from "react-native-unistyles";

const stylesheet = createStyleSheet((theme) => ({
    container: (disabled: boolean) => ({
        alignItems: "center",        
        borderRadius: 12,
        justifyContent: "center",
        minHeight: 40,
        opacity: disabled ? 0.9 : 1,
        variants: {
            variant: {
                primary: {
                    backgroundColor: disabled ? theme.system.gray : theme.system.blue,
                    textColor: "white",
                },
                secondary: {
                    backgroundColor: "transparent",
                    borderWidth: 2,
                    borderColor: disabled ? theme.system.gray : theme.system.blue,
                    textColor: disabled ? theme.system.gray : theme.system.blue,
                },
                tertiary: {
                    backgroundColor: "transparent",
                    textColor: disabled ? theme.system.gray : theme.system.blue,
                }
            },
        }
    }),
    text: {
        color: "white"
    }
}));

export { stylesheet };
