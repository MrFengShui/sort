import { definePreset, usePreset } from '@primeng/themes';

import Aura from '@primeng/themes/aura';

import { AppStyleColorName } from '../models/style.model';

const AuraAmberPreset = definePreset(Aura, {
    semantic: {
        primary: {
            50: '{amber.50}',
            100: '{amber.100}',
            200: '{amber.200}',
            300: '{amber.300}',
            400: '{amber.400}',
            500: '{amber.500}',
            600: '{amber.600}',
            700: '{amber.700}',
            800: '{amber.800}',
            900: '{amber.900}',
            950: '{amber.950}'
        },
        colorScheme: {
            light: {
                surface: {
                    0: '#FFFFFF',
                    50: '{neutral.50}',
                    100: '{neutral.100}',
                    200: '{neutral.200}',
                    300: '{neutral.300}',
                    400: '{neutral.400}',
                    500: '{neutral.500}',
                    600: '{neutral.600}',
                    700: '{neutral.700}',
                    800: '{neutral.800}',
                    900: '{neutral.900}',
                    950: '{neutral.950}'
                },
                primary: {
                    color: '{primary.500}',
                    contrastColor: '{surface.0}',
                    hoverColor: '{primary.600}',
                    activeColor: '{primary.400}'
                },
                formField: {
                    background: '{surface.0}',
                    disabledBackground: '{surface.300}',
                    filledBackground: '{surface.100}',
                    filledHoverBackground: '{surface.200}',
                    filledFocusBackground: '{surface.100}',
                    borderColor: '{surface.400}',
                    hoverBorderColor: '{surface.900}',
                    focusBorderColor: '{primary.color}',
                    invalidBorderColor: '{red.800}',
                    color: '{surface.900}',
                    disabledColor: '{surface.600}',
                    placeholderColor: '{surface.600}',
                    invalidPlaceholderColor: '{red.800}',
                    floatLabelColor: '{surface.600}',
                    floatLabelFocusColor: '{primary.600}',
                    floatLabelActiveColor: '{surface.600}',
                    floatLabelInvalidColor: '{form.field.invalid.placeholder.color}',
                    iconColor: '{surface.600}',
                    shadow: 'none'
                },
                text: {
                    color: '{surface.950}',
                    hoverColor: '{surface.950}',
                    mutedColor: '{surface.600}',
                    hoverMutedColor: '{surface.600}'
                },
                overlay: {
                    select: {
                        background: '{surface.0}',
                        borderColor: '{surface.0}',
                        color: '{text.color}'
                    },
                    popover: {
                        background: '{surface.0}',
                        borderColor: '{surface.0}',
                        color: '{text.color}'
                    },
                    modal: {
                        background: '{surface.0}',
                        borderColor: '{surface.0}',
                        color: '{text.color}'
                    }
                }
            },
            dark: {
                surface: {
                    0: '#FFFFFF',
                    50: '{neutral.50}',
                    100: '{neutral.100}',
                    200: '{neutral.200}',
                    300: '{neutral.300}',
                    400: '{neutral.400}',
                    500: '{neutral.500}',
                    600: '{neutral.600}',
                    700: '{neutral.700}',
                    800: '{neutral.800}',
                    900: '{neutral.900}',
                    950: '{neutral.950}'
                },
                primary: {
                    color: '{primary.500}',
                    contrastColor: '{surface.950}',
                    hoverColor: '{primary.600}',
                    activeColor: '{primary.400}'
                },
                formField: {
                    background: '{surface.950}',
                    disabledBackground: '{surface.700}',
                    filledBackground: '{surface.800}',
                    filledHoverBackground: '{surface.700}',
                    filledFocusBackground: '{surface.800}',
                    borderColor: '{surface.600}',
                    hoverBorderColor: '{surface.400}',
                    focusBorderColor: '{primary.color}',
                    invalidBorderColor: '{red.300}',
                    color: '{surface.0}',
                    disabledColor: '{surface.400}',
                    placeholderColor: '{surface.400}',
                    invalidPlaceholderColor: '{red.300}',
                    floatLabelColor: '{surface.400}',
                    floatLabelFocusColor: '{primary.color}',
                    floatLabelActiveColor: '{surface.400}',
                    floatLabelInvalidColor: '{form.field.invalid.placeholder.color}',
                    iconColor: '{surface.400}',
                    shadow: 'none'
                },
                text: {
                    color: '{surface.0}',
                    hoverColor: '{surface.0}',
                    mutedColor: '{surface.400}',
                    hoverMutedColor: '{surface.400}'
                },
                overlay: {
                    select: {
                        background: '{surface.950}',
                        borderColor: '{surface.950}',
                        color: '{text.color}'
                    },
                    popover: {
                        background: '{surface.950}',
                        borderColor: '{surface.950}',
                        color: '{text.color}'
                    },
                    modal: {
                        background: '{surface.950}',
                        borderColor: '{surface.950}',
                        color: '{text.color}'
                    }
                }
            }
        }
    }
});

const AuraEmeraldPreset = definePreset(Aura, {
    semantic: {
        primary: {
            50: '{emerald.50}',
            100: '{emerald.100}',
            200: '{emerald.200}',
            300: '{emerald.300}',
            400: '{emerald.400}',
            500: '{emerald.500}',
            600: '{emerald.600}',
            700: '{emerald.700}',
            800: '{emerald.800}',
            900: '{emerald.900}',
            950: '{emerald.950}'
        },
        colorScheme: {
            light: {
                surface: {
                    0: '#FFFFFF',
                    50: '{neutral.50}',
                    100: '{neutral.100}',
                    200: '{neutral.200}',
                    300: '{neutral.300}',
                    400: '{neutral.400}',
                    500: '{neutral.500}',
                    600: '{neutral.600}',
                    700: '{neutral.700}',
                    800: '{neutral.800}',
                    900: '{neutral.900}',
                    950: '{neutral.950}'
                },
                primary: {
                    color: '{primary.500}',
                    contrastColor: '{surface.0}',
                    hoverColor: '{primary.600}',
                    activeColor: '{primary.400}'
                },
                formField: {
                    background: '{surface.0}',
                    disabledBackground: '{surface.300}',
                    filledBackground: '{surface.100}',
                    filledHoverBackground: '{surface.200}',
                    filledFocusBackground: '{surface.100}',
                    borderColor: '{surface.400}',
                    hoverBorderColor: '{surface.900}',
                    focusBorderColor: '{primary.color}',
                    invalidBorderColor: '{red.800}',
                    color: '{surface.900}',
                    disabledColor: '{surface.600}',
                    placeholderColor: '{surface.600}',
                    invalidPlaceholderColor: '{red.800}',
                    floatLabelColor: '{surface.600}',
                    floatLabelFocusColor: '{primary.600}',
                    floatLabelActiveColor: '{surface.600}',
                    floatLabelInvalidColor: '{form.field.invalid.placeholder.color}',
                    iconColor: '{surface.600}',
                    shadow: 'none'
                },
                text: {
                    color: '{surface.950}',
                    hoverColor: '{surface.950}',
                    mutedColor: '{surface.600}',
                    hoverMutedColor: '{surface.600}'
                },
                overlay: {
                    select: {
                        background: '{surface.0}',
                        borderColor: '{surface.0}',
                        color: '{text.color}'
                    },
                    popover: {
                        background: '{surface.0}',
                        borderColor: '{surface.0}',
                        color: '{text.color}'
                    },
                    modal: {
                        background: '{surface.0}',
                        borderColor: '{surface.0}',
                        color: '{text.color}'
                    }
                }
            },
            dark: {
                surface: {
                    0: '#FFFFFF',
                    50: '{neutral.50}',
                    100: '{neutral.100}',
                    200: '{neutral.200}',
                    300: '{neutral.300}',
                    400: '{neutral.400}',
                    500: '{neutral.500}',
                    600: '{neutral.600}',
                    700: '{neutral.700}',
                    800: '{neutral.800}',
                    900: '{neutral.900}',
                    950: '{neutral.950}'
                },
                primary: {
                    color: '{primary.500}',
                    contrastColor: '{surface.950}',
                    hoverColor: '{primary.600}',
                    activeColor: '{primary.400}'
                },
                formField: {
                    background: '{surface.950}',
                    disabledBackground: '{surface.700}',
                    filledBackground: '{surface.800}',
                    filledHoverBackground: '{surface.700}',
                    filledFocusBackground: '{surface.800}',
                    borderColor: '{surface.600}',
                    hoverBorderColor: '{surface.400}',
                    focusBorderColor: '{primary.color}',
                    invalidBorderColor: '{red.300}',
                    color: '{surface.0}',
                    disabledColor: '{surface.400}',
                    placeholderColor: '{surface.400}',
                    invalidPlaceholderColor: '{red.300}',
                    floatLabelColor: '{surface.400}',
                    floatLabelFocusColor: '{primary.color}',
                    floatLabelActiveColor: '{surface.400}',
                    floatLabelInvalidColor: '{form.field.invalid.placeholder.color}',
                    iconColor: '{surface.400}',
                    shadow: 'none'
                },
                text: {
                    color: '{surface.0}',
                    hoverColor: '{surface.0}',
                    mutedColor: '{surface.400}',
                    hoverMutedColor: '{surface.400}'
                },
                overlay: {
                    select: {
                        background: '{surface.950}',
                        borderColor: '{surface.950}',
                        color: '{text.color}'
                    },
                    popover: {
                        background: '{surface.950}',
                        borderColor: '{surface.950}',
                        color: '{text.color}'
                    },
                    modal: {
                        background: '{surface.950}',
                        borderColor: '{surface.950}',
                        color: '{text.color}'
                    }
                }
            }
        }
    }
});

const AuraIndigoPreset = definePreset(Aura, {
    semantic: {
        primary: {
            50: '{indigo.50}',
            100: '{indigo.100}',
            200: '{indigo.200}',
            300: '{indigo.300}',
            400: '{indigo.400}',
            500: '{indigo.500}',
            600: '{indigo.600}',
            700: '{indigo.700}',
            800: '{indigo.800}',
            900: '{indigo.900}',
            950: '{indigo.950}'
        },
        colorScheme: {
            light: {
                surface: {
                    0: '#FFFFFF',
                    50: '{neutral.50}',
                    100: '{neutral.100}',
                    200: '{neutral.200}',
                    300: '{neutral.300}',
                    400: '{neutral.400}',
                    500: '{neutral.500}',
                    600: '{neutral.600}',
                    700: '{neutral.700}',
                    800: '{neutral.800}',
                    900: '{neutral.900}',
                    950: '{neutral.950}'
                },
                primary: {
                    color: '{primary.500}',
                    contrastColor: '{surface.0}',
                    hoverColor: '{primary.600}',
                    activeColor: '{primary.400}'
                },
                formField: {
                    background: '{surface.0}',
                    disabledBackground: '{surface.300}',
                    filledBackground: '{surface.100}',
                    filledHoverBackground: '{surface.200}',
                    filledFocusBackground: '{surface.100}',
                    borderColor: '{surface.400}',
                    hoverBorderColor: '{surface.900}',
                    focusBorderColor: '{primary.color}',
                    invalidBorderColor: '{red.800}',
                    color: '{surface.900}',
                    disabledColor: '{surface.600}',
                    placeholderColor: '{surface.600}',
                    invalidPlaceholderColor: '{red.800}',
                    floatLabelColor: '{surface.600}',
                    floatLabelFocusColor: '{primary.600}',
                    floatLabelActiveColor: '{surface.600}',
                    floatLabelInvalidColor: '{form.field.invalid.placeholder.color}',
                    iconColor: '{surface.600}',
                    shadow: 'none'
                },
                text: {
                    color: '{surface.950}',
                    hoverColor: '{surface.950}',
                    mutedColor: '{surface.600}',
                    hoverMutedColor: '{surface.600}'
                },
                overlay: {
                    select: {
                        background: '{surface.0}',
                        borderColor: '{surface.0}',
                        color: '{text.color}'
                    },
                    popover: {
                        background: '{surface.0}',
                        borderColor: '{surface.0}',
                        color: '{text.color}'
                    },
                    modal: {
                        background: '{surface.0}',
                        borderColor: '{surface.0}',
                        color: '{text.color}'
                    }
                }
            },
            dark: {
                surface: {
                    0: '#FFFFFF',
                    50: '{neutral.50}',
                    100: '{neutral.100}',
                    200: '{neutral.200}',
                    300: '{neutral.300}',
                    400: '{neutral.400}',
                    500: '{neutral.500}',
                    600: '{neutral.600}',
                    700: '{neutral.700}',
                    800: '{neutral.800}',
                    900: '{neutral.900}',
                    950: '{neutral.950}'
                },
                primary: {
                    color: '{primary.500}',
                    contrastColor: '{surface.950}',
                    hoverColor: '{primary.600}',
                    activeColor: '{primary.400}'
                },
                formField: {
                    background: '{surface.950}',
                    disabledBackground: '{surface.700}',
                    filledBackground: '{surface.800}',
                    filledHoverBackground: '{surface.700}',
                    filledFocusBackground: '{surface.800}',
                    borderColor: '{surface.600}',
                    hoverBorderColor: '{surface.400}',
                    focusBorderColor: '{primary.color}',
                    invalidBorderColor: '{red.300}',
                    color: '{surface.0}',
                    disabledColor: '{surface.400}',
                    placeholderColor: '{surface.400}',
                    invalidPlaceholderColor: '{red.300}',
                    floatLabelColor: '{surface.400}',
                    floatLabelFocusColor: '{primary.color}',
                    floatLabelActiveColor: '{surface.400}',
                    floatLabelInvalidColor: '{form.field.invalid.placeholder.color}',
                    iconColor: '{surface.400}',
                    shadow: 'none'
                },
                text: {
                    color: '{surface.0}',
                    hoverColor: '{surface.0}',
                    mutedColor: '{surface.400}',
                    hoverMutedColor: '{surface.400}'
                },
                overlay: {
                    select: {
                        background: '{surface.950}',
                        borderColor: '{surface.950}',
                        color: '{text.color}'
                    },
                    popover: {
                        background: '{surface.950}',
                        borderColor: '{surface.950}',
                        color: '{text.color}'
                    },
                    modal: {
                        background: '{surface.950}',
                        borderColor: '{surface.950}',
                        color: '{text.color}'
                    }
                }
            }
        }
    }
});

const AuraOrangePreset = definePreset(Aura, {
    semantic: {
        primary: {
            50: '{orange.50}',
            100: '{orange.100}',
            200: '{orange.200}',
            300: '{orange.300}',
            400: '{orange.400}',
            500: '{orange.500}',
            600: '{orange.600}',
            700: '{orange.700}',
            800: '{orange.800}',
            900: '{orange.900}',
            950: '{orange.950}'
        },
        colorScheme: {
            light: {
                surface: {
                    0: '#FFFFFF',
                    50: '{neutral.50}',
                    100: '{neutral.100}',
                    200: '{neutral.200}',
                    300: '{neutral.300}',
                    400: '{neutral.400}',
                    500: '{neutral.500}',
                    600: '{neutral.600}',
                    700: '{neutral.700}',
                    800: '{neutral.800}',
                    900: '{neutral.900}',
                    950: '{neutral.950}'
                },
                primary: {
                    color: '{primary.500}',
                    contrastColor: '{surface.0}',
                    hoverColor: '{primary.600}',
                    activeColor: '{primary.400}'
                },
                formField: {
                    background: '{surface.0}',
                    disabledBackground: '{surface.300}',
                    filledBackground: '{surface.100}',
                    filledHoverBackground: '{surface.200}',
                    filledFocusBackground: '{surface.100}',
                    borderColor: '{surface.400}',
                    hoverBorderColor: '{surface.900}',
                    focusBorderColor: '{primary.color}',
                    invalidBorderColor: '{red.800}',
                    color: '{surface.900}',
                    disabledColor: '{surface.600}',
                    placeholderColor: '{surface.600}',
                    invalidPlaceholderColor: '{red.800}',
                    floatLabelColor: '{surface.600}',
                    floatLabelFocusColor: '{primary.600}',
                    floatLabelActiveColor: '{surface.600}',
                    floatLabelInvalidColor: '{form.field.invalid.placeholder.color}',
                    iconColor: '{surface.600}',
                    shadow: 'none'
                },
                text: {
                    color: '{surface.950}',
                    hoverColor: '{surface.950}',
                    mutedColor: '{surface.600}',
                    hoverMutedColor: '{surface.600}'
                },
                overlay: {
                    select: {
                        background: '{surface.0}',
                        borderColor: '{surface.0}',
                        color: '{text.color}'
                    },
                    popover: {
                        background: '{surface.0}',
                        borderColor: '{surface.0}',
                        color: '{text.color}'
                    },
                    modal: {
                        background: '{surface.0}',
                        borderColor: '{surface.0}',
                        color: '{text.color}'
                    }
                }
            },
            dark: {
                surface: {
                    0: '#FFFFFF',
                    50: '{neutral.50}',
                    100: '{neutral.100}',
                    200: '{neutral.200}',
                    300: '{neutral.300}',
                    400: '{neutral.400}',
                    500: '{neutral.500}',
                    600: '{neutral.600}',
                    700: '{neutral.700}',
                    800: '{neutral.800}',
                    900: '{neutral.900}',
                    950: '{neutral.950}'
                },
                primary: {
                    color: '{primary.500}',
                    contrastColor: '{surface.950}',
                    hoverColor: '{primary.600}',
                    activeColor: '{primary.400}'
                },
                formField: {
                    background: '{surface.950}',
                    disabledBackground: '{surface.700}',
                    filledBackground: '{surface.800}',
                    filledHoverBackground: '{surface.700}',
                    filledFocusBackground: '{surface.800}',
                    borderColor: '{surface.600}',
                    hoverBorderColor: '{surface.400}',
                    focusBorderColor: '{primary.color}',
                    invalidBorderColor: '{red.300}',
                    color: '{surface.0}',
                    disabledColor: '{surface.400}',
                    placeholderColor: '{surface.400}',
                    invalidPlaceholderColor: '{red.300}',
                    floatLabelColor: '{surface.400}',
                    floatLabelFocusColor: '{primary.color}',
                    floatLabelActiveColor: '{surface.400}',
                    floatLabelInvalidColor: '{form.field.invalid.placeholder.color}',
                    iconColor: '{surface.400}',
                    shadow: 'none'
                },
                text: {
                    color: '{surface.0}',
                    hoverColor: '{surface.0}',
                    mutedColor: '{surface.400}',
                    hoverMutedColor: '{surface.400}'
                },
                overlay: {
                    select: {
                        background: '{surface.950}',
                        borderColor: '{surface.950}',
                        color: '{text.color}'
                    },
                    popover: {
                        background: '{surface.950}',
                        borderColor: '{surface.950}',
                        color: '{text.color}'
                    },
                    modal: {
                        background: '{surface.950}',
                        borderColor: '{surface.950}',
                        color: '{text.color}'
                    }
                }
            }
        }
    }
});

const AuraRosePreset = definePreset(Aura, {
    semantic: {
        primary: {
            50: '{rose.50}',
            100: '{rose.100}',
            200: '{rose.200}',
            300: '{rose.300}',
            400: '{rose.400}',
            500: '{rose.500}',
            600: '{rose.600}',
            700: '{rose.700}',
            800: '{rose.800}',
            900: '{rose.900}',
            950: '{rose.950}'
        },
        colorScheme: {
            light: {
                surface: {
                    0: '#FFFFFF',
                    50: '{neutral.50}',
                    100: '{neutral.100}',
                    200: '{neutral.200}',
                    300: '{neutral.300}',
                    400: '{neutral.400}',
                    500: '{neutral.500}',
                    600: '{neutral.600}',
                    700: '{neutral.700}',
                    800: '{neutral.800}',
                    900: '{neutral.900}',
                    950: '{neutral.950}'
                },
                primary: {
                    color: '{primary.500}',
                    contrastColor: '{surface.0}',
                    hoverColor: '{primary.600}',
                    activeColor: '{primary.400}'
                },
                formField: {
                    background: '{surface.0}',
                    disabledBackground: '{surface.300}',
                    filledBackground: '{surface.100}',
                    filledHoverBackground: '{surface.200}',
                    filledFocusBackground: '{surface.100}',
                    borderColor: '{surface.400}',
                    hoverBorderColor: '{surface.900}',
                    focusBorderColor: '{primary.color}',
                    invalidBorderColor: '{red.800}',
                    color: '{surface.900}',
                    disabledColor: '{surface.600}',
                    placeholderColor: '{surface.600}',
                    invalidPlaceholderColor: '{red.800}',
                    floatLabelColor: '{surface.600}',
                    floatLabelFocusColor: '{primary.600}',
                    floatLabelActiveColor: '{surface.600}',
                    floatLabelInvalidColor: '{form.field.invalid.placeholder.color}',
                    iconColor: '{surface.600}',
                    shadow: 'none'
                },
                text: {
                    color: '{surface.950}',
                    hoverColor: '{surface.950}',
                    mutedColor: '{surface.600}',
                    hoverMutedColor: '{surface.600}'
                },
                overlay: {
                    select: {
                        background: '{surface.0}',
                        borderColor: '{surface.0}',
                        color: '{text.color}'
                    },
                    popover: {
                        background: '{surface.0}',
                        borderColor: '{surface.0}',
                        color: '{text.color}'
                    },
                    modal: {
                        background: '{surface.0}',
                        borderColor: '{surface.0}',
                        color: '{text.color}'
                    }
                }
            },
            dark: {
                surface: {
                    0: '#FFFFFF',
                    50: '{neutral.50}',
                    100: '{neutral.100}',
                    200: '{neutral.200}',
                    300: '{neutral.300}',
                    400: '{neutral.400}',
                    500: '{neutral.500}',
                    600: '{neutral.600}',
                    700: '{neutral.700}',
                    800: '{neutral.800}',
                    900: '{neutral.900}',
                    950: '{neutral.950}'
                },
                primary: {
                    color: '{primary.500}',
                    contrastColor: '{surface.950}',
                    hoverColor: '{primary.600}',
                    activeColor: '{primary.400}'
                },
                formField: {
                    background: '{surface.950}',
                    disabledBackground: '{surface.700}',
                    filledBackground: '{surface.800}',
                    filledHoverBackground: '{surface.700}',
                    filledFocusBackground: '{surface.800}',
                    borderColor: '{surface.600}',
                    hoverBorderColor: '{surface.400}',
                    focusBorderColor: '{primary.color}',
                    invalidBorderColor: '{red.300}',
                    color: '{surface.0}',
                    disabledColor: '{surface.400}',
                    placeholderColor: '{surface.400}',
                    invalidPlaceholderColor: '{red.300}',
                    floatLabelColor: '{surface.400}',
                    floatLabelFocusColor: '{primary.color}',
                    floatLabelActiveColor: '{surface.400}',
                    floatLabelInvalidColor: '{form.field.invalid.placeholder.color}',
                    iconColor: '{surface.400}',
                    shadow: 'none'
                },
                text: {
                    color: '{surface.0}',
                    hoverColor: '{surface.0}',
                    mutedColor: '{surface.400}',
                    hoverMutedColor: '{surface.400}'
                },
                overlay: {
                    select: {
                        background: '{surface.950}',
                        borderColor: '{surface.950}',
                        color: '{text.color}'
                    },
                    popover: {
                        background: '{surface.950}',
                        borderColor: '{surface.950}',
                        color: '{text.color}'
                    },
                    modal: {
                        background: '{surface.950}',
                        borderColor: '{surface.950}',
                        color: '{text.color}'
                    }
                }
            }
        }
    }
});

const AuraSkyPreset = definePreset(Aura, {
    semantic: {
        primary: {
            50: '{sky.50}',
            100: '{sky.100}',
            200: '{sky.200}',
            300: '{sky.300}',
            400: '{sky.400}',
            500: '{sky.500}',
            600: '{sky.600}',
            700: '{sky.700}',
            800: '{sky.800}',
            900: '{sky.900}',
            950: '{sky.950}'
        },
        colorScheme: {
            light: {
                surface: {
                    0: '#FFFFFF',
                    50: '{neutral.50}',
                    100: '{neutral.100}',
                    200: '{neutral.200}',
                    300: '{neutral.300}',
                    400: '{neutral.400}',
                    500: '{neutral.500}',
                    600: '{neutral.600}',
                    700: '{neutral.700}',
                    800: '{neutral.800}',
                    900: '{neutral.900}',
                    950: '{neutral.950}'
                },
                primary: {
                    color: '{primary.500}',
                    contrastColor: '{surface.0}',
                    hoverColor: '{primary.600}',
                    activeColor: '{primary.400}'
                },
                formField: {
                    background: '{surface.0}',
                    disabledBackground: '{surface.300}',
                    filledBackground: '{surface.100}',
                    filledHoverBackground: '{surface.200}',
                    filledFocusBackground: '{surface.100}',
                    borderColor: '{surface.400}',
                    hoverBorderColor: '{surface.900}',
                    focusBorderColor: '{primary.color}',
                    invalidBorderColor: '{red.800}',
                    color: '{surface.900}',
                    disabledColor: '{surface.600}',
                    placeholderColor: '{surface.600}',
                    invalidPlaceholderColor: '{red.800}',
                    floatLabelColor: '{surface.600}',
                    floatLabelFocusColor: '{primary.600}',
                    floatLabelActiveColor: '{surface.600}',
                    floatLabelInvalidColor: '{form.field.invalid.placeholder.color}',
                    iconColor: '{surface.600}',
                    shadow: 'none'
                },
                text: {
                    color: '{surface.950}',
                    hoverColor: '{surface.950}',
                    mutedColor: '{surface.600}',
                    hoverMutedColor: '{surface.600}'
                },
                overlay: {
                    select: {
                        background: '{surface.0}',
                        borderColor: '{surface.0}',
                        color: '{text.color}'
                    },
                    popover: {
                        background: '{surface.0}',
                        borderColor: '{surface.0}',
                        color: '{text.color}'
                    },
                    modal: {
                        background: '{surface.0}',
                        borderColor: '{surface.0}',
                        color: '{text.color}'
                    }
                }
            },
            dark: {
                surface: {
                    0: '#FFFFFF',
                    50: '{neutral.50}',
                    100: '{neutral.100}',
                    200: '{neutral.200}',
                    300: '{neutral.300}',
                    400: '{neutral.400}',
                    500: '{neutral.500}',
                    600: '{neutral.600}',
                    700: '{neutral.700}',
                    800: '{neutral.800}',
                    900: '{neutral.900}',
                    950: '{neutral.950}'
                },
                primary: {
                    color: '{primary.500}',
                    contrastColor: '{surface.950}',
                    hoverColor: '{primary.600}',
                    activeColor: '{primary.400}'
                },
                formField: {
                    background: '{surface.950}',
                    disabledBackground: '{surface.700}',
                    filledBackground: '{surface.800}',
                    filledHoverBackground: '{surface.700}',
                    filledFocusBackground: '{surface.800}',
                    borderColor: '{surface.600}',
                    hoverBorderColor: '{surface.400}',
                    focusBorderColor: '{primary.color}',
                    invalidBorderColor: '{red.300}',
                    color: '{surface.0}',
                    disabledColor: '{surface.400}',
                    placeholderColor: '{surface.400}',
                    invalidPlaceholderColor: '{red.300}',
                    floatLabelColor: '{surface.400}',
                    floatLabelFocusColor: '{primary.color}',
                    floatLabelActiveColor: '{surface.400}',
                    floatLabelInvalidColor: '{form.field.invalid.placeholder.color}',
                    iconColor: '{surface.400}',
                    shadow: 'none'
                },
                text: {
                    color: '{surface.0}',
                    hoverColor: '{surface.0}',
                    mutedColor: '{surface.400}',
                    hoverMutedColor: '{surface.400}'
                },
                overlay: {
                    select: {
                        background: '{surface.950}',
                        borderColor: '{surface.950}',
                        color: '{text.color}'
                    },
                    popover: {
                        background: '{surface.950}',
                        borderColor: '{surface.950}',
                        color: '{text.color}'
                    },
                    modal: {
                        background: '{surface.950}',
                        borderColor: '{surface.950}',
                        color: '{text.color}'
                    }
                }
            }
        }
    }
});

const AuraVioletPreset = definePreset(Aura, {
    semantic: {
        primary: {
            50: '{violet.50}',
            100: '{violet.100}',
            200: '{violet.200}',
            300: '{violet.300}',
            400: '{violet.400}',
            500: '{violet.500}',
            600: '{violet.600}',
            700: '{violet.700}',
            800: '{violet.800}',
            900: '{violet.900}',
            950: '{violet.950}'
        },
        colorScheme: {
            light: {
                surface: {
                    0: '#FFFFFF',
                    50: '{neutral.50}',
                    100: '{neutral.100}',
                    200: '{neutral.200}',
                    300: '{neutral.300}',
                    400: '{neutral.400}',
                    500: '{neutral.500}',
                    600: '{neutral.600}',
                    700: '{neutral.700}',
                    800: '{neutral.800}',
                    900: '{neutral.900}',
                    950: '{neutral.950}'
                },
                primary: {
                    color: '{primary.500}',
                    contrastColor: '{surface.0}',
                    hoverColor: '{primary.600}',
                    activeColor: '{primary.400}'
                },
                formField: {
                    background: '{surface.0}',
                    disabledBackground: '{surface.300}',
                    filledBackground: '{surface.100}',
                    filledHoverBackground: '{surface.200}',
                    filledFocusBackground: '{surface.100}',
                    borderColor: '{surface.400}',
                    hoverBorderColor: '{surface.900}',
                    focusBorderColor: '{primary.color}',
                    invalidBorderColor: '{red.800}',
                    color: '{surface.900}',
                    disabledColor: '{surface.600}',
                    placeholderColor: '{surface.600}',
                    invalidPlaceholderColor: '{red.800}',
                    floatLabelColor: '{surface.600}',
                    floatLabelFocusColor: '{primary.600}',
                    floatLabelActiveColor: '{surface.600}',
                    floatLabelInvalidColor: '{form.field.invalid.placeholder.color}',
                    iconColor: '{surface.600}',
                    shadow: 'none'
                },
                text: {
                    color: '{surface.950}',
                    hoverColor: '{surface.950}',
                    mutedColor: '{surface.600}',
                    hoverMutedColor: '{surface.600}'
                },
                overlay: {
                    select: {
                        background: '{surface.0}',
                        borderColor: '{surface.0}',
                        color: '{text.color}'
                    },
                    popover: {
                        background: '{surface.0}',
                        borderColor: '{surface.0}',
                        color: '{text.color}'
                    },
                    modal: {
                        background: '{surface.0}',
                        borderColor: '{surface.0}',
                        color: '{text.color}'
                    }
                }
            },
            dark: {
                surface: {
                    0: '#FFFFFF',
                    50: '{neutral.50}',
                    100: '{neutral.100}',
                    200: '{neutral.200}',
                    300: '{neutral.300}',
                    400: '{neutral.400}',
                    500: '{neutral.500}',
                    600: '{neutral.600}',
                    700: '{neutral.700}',
                    800: '{neutral.800}',
                    900: '{neutral.900}',
                    950: '{neutral.950}'
                },
                primary: {
                    color: '{primary.500}',
                    contrastColor: '{surface.950}',
                    hoverColor: '{primary.600}',
                    activeColor: '{primary.400}'
                },
                formField: {
                    background: '{surface.950}',
                    disabledBackground: '{surface.700}',
                    filledBackground: '{surface.800}',
                    filledHoverBackground: '{surface.700}',
                    filledFocusBackground: '{surface.800}',
                    borderColor: '{surface.600}',
                    hoverBorderColor: '{surface.400}',
                    focusBorderColor: '{primary.color}',
                    invalidBorderColor: '{red.300}',
                    color: '{surface.0}',
                    disabledColor: '{surface.400}',
                    placeholderColor: '{surface.400}',
                    invalidPlaceholderColor: '{red.300}',
                    floatLabelColor: '{surface.400}',
                    floatLabelFocusColor: '{primary.color}',
                    floatLabelActiveColor: '{surface.400}',
                    floatLabelInvalidColor: '{form.field.invalid.placeholder.color}',
                    iconColor: '{surface.400}',
                    shadow: 'none'
                },
                text: {
                    color: '{surface.0}',
                    hoverColor: '{surface.0}',
                    mutedColor: '{surface.400}',
                    hoverMutedColor: '{surface.400}'
                },
                overlay: {
                    select: {
                        background: '{surface.950}',
                        borderColor: '{surface.950}',
                        color: '{text.color}'
                    },
                    popover: {
                        background: '{surface.950}',
                        borderColor: '{surface.950}',
                        color: '{text.color}'
                    },
                    modal: {
                        background: '{surface.950}',
                        borderColor: '{surface.950}',
                        color: '{text.color}'
                    }
                }
            }
        }
    }
});

export const selectAuraPreset = (name: AppStyleColorName): void => {
    switch (name) {
        case 'amber': usePreset(AuraAmberPreset); break;
        case 'emerald': usePreset(AuraEmeraldPreset); break;
        case 'indigo': usePreset(AuraIndigoPreset); break;
        case 'orange': usePreset(AuraOrangePreset); break;
        case 'rose': usePreset(AuraRosePreset); break;
        case 'sky': usePreset(AuraSkyPreset); break;
        case 'violet': usePreset(AuraVioletPreset); break;
    }
}
