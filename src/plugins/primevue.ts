import PrimeVue from 'primevue/config'
import Tailwind from 'primevue/passthrough/tailwind'
import { usePassThrough } from 'primevue/passthrough'

import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import Card from 'primevue/card'
import Toast from 'primevue/toast'
import DynamicDialog from 'primevue/dynamicdialog'
import ConfirmDialog from 'primevue/confirmdialog'
import InlineMessage from 'primevue/inlinemessage'
import Menubar from 'primevue/menubar'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Row from 'primevue/row'
import ColumnGroup from 'primevue/columngroup'
import MultiSelect from 'primevue/multiselect'
import Calendar from 'primevue/calendar'
import Panel from 'primevue/panel'
import Checkbox from 'primevue/checkbox'
import RadioButton from 'primevue/radiobutton'
import ProgressSpinner from 'primevue/progressspinner'
import FileUpload from 'primevue/fileupload'
import Image from 'primevue/image'

import ToastService from 'primevue/toastservice'
import DialogService from 'primevue/dialogservice'
import ConfirmationService from 'primevue/confirmationservice'

export default defineNuxtPlugin((nuxtApp) => {
    const vue = nuxtApp.vueApp

    vue.use(ToastService)
    vue.use(DialogService)
    vue.use(ConfirmationService)

    vue.component('Button', Button)
    vue.component('Card', Card)
    vue.component('InputText', InputText)
    vue.component('Password', Password)
    vue.component('Toast', Toast)
    vue.component('DynamicDialog', DynamicDialog)
    vue.component('ConfirmDialog', ConfirmDialog)
    vue.component('InlineMessage', InlineMessage)
    vue.component('Menubar', Menubar)
    vue.component('DataTable', DataTable)
    vue.component('Column', Column)
    vue.component('Row', Row)
    vue.component('ColumnGroup', ColumnGroup)
    vue.component('MultiSelect', MultiSelect)
    vue.component('Calendar', Calendar)
    vue.component('Panel', Panel)
    vue.component('Checkbox', Checkbox)
    vue.component('RadioButton', RadioButton)
    vue.component('ProgressSpinner', ProgressSpinner)
    vue.component('FileUpload', FileUpload)
    vue.component('Image', Image)

    vue.use(PrimeVue, { unstyled: true, ripple: false, pt: tailwindComponentStyle })
})

const TRANSITIONS = {
    overlay: {
        enterFromClass: 'opacity-0 scale-75',
        enterActiveClass: 'transition-transform transition-opacity duration-150 ease-in',
        leaveActiveClass: 'transition-opacity duration-150 ease-linear',
        leaveToClass: 'opacity-0',
    },
}

const tailwindComponentStyle = usePassThrough(
    Tailwind,
    {
        password: {
            root: ({ props }: { props: any }) => ({
                class: [
                    'inline-flex relative',
                    {
                        'opacity-60 select-none pointer-events-none cursor-default': props.disabled,
                    },
                ],
            }),
            input: 'w-full',
            panel: 'p-5 bg-white dark:bg-gray-900 text-gray-700 dark:text-white/80 shadow-md rounded-md',
            meter: 'mb-2 bg-gray-300 dark:bg-gray-700 h-3',
            meterlabel: ({ instance, props }: { props: any; instance: any }) => ({
                class: [
                    'transition-width duration-1000 ease-in-out h-full',
                    {
                        'bg-red-500': instance?.meter?.strength === 'weak',
                        'bg-orange-500': instance?.meter?.strength === 'medium',
                        'bg-green-500': instance?.meter?.strength === 'strong',
                    },
                    { 'pr-[2.5rem] ': props.toggleMask },
                ],
            }),
            showicon: {
                class: ['absolute top-1/2 -mt-2', 'right-3 text-gray-600 dark:text-white/70'],
            },
            hideicon: {
                class: ['absolute top-1/2 -mt-2', 'right-3 text-gray-600 dark:text-white/70'],
            },
            transition: TRANSITIONS.overlay,
        },
        dialog: {
            root: ({ state }: { state: any }) => ({
                class: [
                    'rounded-lg shadow-lg border-0',
                    'max-h-90 transform scale-100',
                    'm-0 w-[50vw]',
                    'dark:border dark:border-blue-900/40',
                    {
                        'transition-none transform-none !w-screen !h-screen !max-h-full !top-0 !left-0':
                            state.maximized,
                    },
                ],
            }),
            header: {
                class: [
                    'flex items-center justify-between shrink-0',
                    'bg-white text-gray-800 border-t-0  rounded-tl-lg rounded-tr-lg p-6',
                    'dark:bg-gray-900  dark:text-white/80',
                ],
            },
            headerTitle: {
                class: 'font-bold text-lg',
            },
            headerIcons: {
                class: 'flex items-center',
            },
            closeButton: {
                class: [
                    'flex items-center justify-center overflow-hidden relative',
                    'w-8 h-8 text-gray-500 border-0 bg-transparent rounded-full transition duration-200 ease-in-out mr-2 last:mr-0',
                    'hover:text-gray-700 hover:border-transparent hover:bg-gray-200',
                    'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]', // focus
                    'dark:hover:text-white/80 dark:hover:border-transparent dark:hover:bg-gray-800/80 dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]',
                ],
            },
            closeButtonIcon: {
                class: 'w-4 h-4 inline-block',
            },
            content: ({ state, instance }: { state: any; instance: any }) => ({
                class: [
                    'overflow-y-auto',
                    'bg-white text-gray-700 px-6 pb-8 pt-0',
                    'dark:bg-gray-900  dark:text-white/80',
                    {
                        grow: state.maximized,
                    },
                    {
                        'rounded-bl-lg rounded-br-lg': !instance.$slots.footer,
                    },
                ],
            }),
            footer: {
                class: [
                    'flex gap-2 shrink-0 justify-end align-center',
                    'border-t-0 bg-white text-gray-700 px-6 pb-6 text-right rounded-b-lg',
                    'dark:bg-gray-900  dark:text-white/80',
                ],
            },
            mask: ({ props }: { props: any }) => ({
                class: ['transition duration-200', { 'bg-black/40': props.modal }],
            }),
            transition: ({ props }: { props: any }) => {
                return props.position === 'top'
                    ? {
                          enterFromClass: 'opacity-0 scale-75 translate-x-0 -translate-y-full translate-z-0',
                          enterActiveClass: 'transition-all duration-200 ease-out',
                          leaveActiveClass: 'transition-all duration-200 ease-out',
                          leaveToClass: 'opacity-0 scale-75 translate-x-0 -translate-y-full translate-z-0',
                      }
                    : props.position === 'bottom'
                      ? {
                            enterFromClass: 'opacity-0 scale-75 translate-y-full',
                            enterActiveClass: 'transition-all duration-200 ease-out',
                            leaveActiveClass: 'transition-all duration-200 ease-out',
                            leaveToClass: 'opacity-0 scale-75 translate-x-0 translate-y-full translate-z-0',
                        }
                      : props.position === 'left' || props.position === 'topleft' || props.position === 'bottomleft'
                        ? {
                              enterFromClass: 'opacity-0 scale-75 -translate-x-full translate-y-0 translate-z-0',
                              enterActiveClass: 'transition-all duration-200 ease-out',
                              leaveActiveClass: 'transition-all duration-200 ease-out',
                              leaveToClass: 'opacity-0 scale-75  -translate-x-full translate-y-0 translate-z-0',
                          }
                        : props.position === 'right' ||
                            props.position === 'topright' ||
                            props.position === 'bottomright'
                          ? {
                                enterFromClass: 'opacity-0 scale-75 translate-x-full translate-y-0 translate-z-0',
                                enterActiveClass: 'transition-all duration-200 ease-out',
                                leaveActiveClass: 'transition-all duration-200 ease-out',
                                leaveToClass:
                                    'opacity-0 scale-75 opacity-0 scale-75 translate-x-full translate-y-0 translate-z-0',
                            }
                          : {
                                enterFromClass: 'opacity-0 scale-75',
                                enterActiveClass: 'transition-all duration-200 ease-out',
                                leaveActiveClass: 'transition-all duration-200 ease-out',
                                leaveToClass: 'opacity-0 scale-75',
                            }
            },
        },
        menubar: {
            root: {
                class: [
                    'p-2 bg-primary dark:bg-gray-900 border border-primary dark:border-blue-900/40 rounded-b-md',
                    'flex items-center relative',
                ],
            },
            menu: ({ props }: { props: any }) => ({
                class: [
                    'm-0 sm:p-0 list-none',
                    'outline-none',
                    'sm:flex items-center flex-wrap sm:flex-row sm:top-auto sm:left-auto sm:relative sm:bg-transparent sm:shadow-none sm:w-auto',
                    'flex-col top-full left-0',
                    'absolute py-1 bg-primary dark:bg-gray-900 border-0 shadow-md w-full',
                    {
                        'hidden ': !props?.mobileActive,
                        'flex ': props?.mobileActive,
                    },
                ],
            }),
            menuitem: {
                class: 'sm:relative sm:w-auto w-full static',
            },
            content: ({ props, context }: { props: any; context: any }) => ({
                class: [
                    ' transition-shadow duration-200',
                    '',
                    { 'rounded-md': props.root },
                    {
                        'text-white dark:text-white/80': !context.focused && !context.active,
                        'bg-secondary text-white dark:text-white/80 dark:bg-gray-800/90':
                            context.focused && !context.active,
                        'bg-blue-100 text-blue-700 dark:bg-blue-400 dark:text-white/80':
                            context.focused && context.active,
                        'bg-blue-50 text-blue-700 dark:bg-blue-300 dark:text-white/80':
                            !context.focused && context.active,
                    },
                    {
                        'dark:hover:text-white/80 hover:bg-secondary dark:hover:bg-gray-800/80': !context.active,
                        'hover:bg-blue-200 dark:hover:bg-blue-500': context.active,
                    },
                ],
            }),
            action: ({ context }: { context: any }) => ({
                class: [
                    'select-none',
                    'cursor-pointer flex items-center no-underline overflow-hidden relative',
                    'py-3 px-5 select-none',
                    {
                        'pl-9 sm:pl-5': context.level === 1,
                        'pl-14 sm:pl-5': context.level === 2,
                    },
                ],
            }),
            icon: {
                class: 'mr-2',
            },
            submenuicon: ({ props }: { props: any }) => ({
                class: [
                    {
                        'ml-auto sm:ml-2': props.root,
                        'ml-auto': !props.root,
                    },
                ],
            }),
            submenu: ({ props }: { props: any }) => ({
                class: [
                    'py-1 bg-primary dark:bg-gray-900 border-0  sm:shadow-md sm:w-48',
                    'w-full static shadow-none',
                    'sm:absolute z-10',
                    'm-0 list-none',
                    {
                        'sm:absolute sm:left-full sm:top-0': props.level > 1,
                    },
                ],
            }),
            separator: {
                class: 'border-t border-gray-300 dark:border-blue-900/40 my-1',
            },
            button: {
                class: [
                    'flex sm:hidden w-8 h-8 rounded-full text-gray-600 dark:text-white/80 transition duration-200 ease-in-out',
                    'cursor-pointer flex items-center justify-center no-underline',
                    'hover:text-gray-700 dark:hover:text-white/80 hover:bg-gray-200 dark:hover:bg-gray-800/80 ',
                    'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]',
                ],
            },
        },
        fileupload: {
            input: 'hidden',
            buttonbar: {
                class: [
                    'flex flex-wrap',
                    'bg-gray-50 dark:bg-gray-800 p-5 border border-solid border-gray-300 dark:border-blue-900/40 text-gray-700 dark:text-white/80 rounded-tr-lg rounded-tl-lg gap-2 border-b-0',
                ],
            },
            chooseButton: {
                class: [
                    'text-white bg-blue-500 border border-blue-500 p-3 px-5 rounded-md text-base',
                    'overflow-hidden relative',
                ],
            },
            chooseIcon: 'mr-2 inline-block',
            chooseButtonLabel: 'flex-1 font-bold',
            uploadbutton: {
                icon: 'mr-2',
            },
            cancelbutton: {
                icon: 'mr-2',
            },
            content: {
                class: [
                    'relative',
                    'bg-white dark:bg-gray-900 p-8 border border-gray-300 dark:border-blue-900/40 text-gray-700 dark:text-white/80 rounded-b-lg',
                ],
            },
            file: {
                class: [
                    'flex items-center flex-wrap',
                    'p-4 border border-gray-300 dark:border-blue-900/40 rounded gap-2 mb-2',
                    'last:mb-0',
                ],
            },
            thumbnail: 'shrink-0',
            fileName: 'mb-2',
            fileSize: 'mr-2',
            uploadicon: 'mr-2',
        },
    },
    {
        mergeSections: false,
        mergeProps: false,
    },
)
