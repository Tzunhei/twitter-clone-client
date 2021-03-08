import { useSnackbar } from 'notistack';
import { SWRConfig } from 'swr';

interface IGlobalSWRConfigProps {
  children: React.ReactNode;
}

const GlobalSWRConfig = (props: IGlobalSWRConfigProps) => {
  const { enqueueSnackbar } = useSnackbar();

  return (
    <SWRConfig
      value={{
        errorRetryCount: 3,
        onError: (error) => {
          enqueueSnackbar(error.message, { variant: 'error' });
        },
      }}
    >
      {props.children}
    </SWRConfig>
  );
};

export default GlobalSWRConfig;
