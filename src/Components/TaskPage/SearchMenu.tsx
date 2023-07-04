import { useAppDispatch } from "../../Redux/ReduxHooks";
import {
  isCurrentForm,
  showSideBar,
} from "../../Redux/Slices/showSideBar.slice";
import {
  SearchBlock,
  SearchInputBlock,
  SearchIcon,
  SearchInput,
  SearchButtons,
  ViewIcon,
  TableIcon,
} from "./styled";

export const SearchMenu = () => {
  const dispatch = useAppDispatch();

  const openSideBarConfig = () => {
    dispatch(showSideBar(true));
    dispatch(isCurrentForm("tableConfig"));
  };

  return (
    <SearchBlock>
      <SearchInputBlock>
        <SearchIcon>
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.5 14.48H14.71L14.43 14.21C15.63 12.81 16.25 10.9 15.91 8.87001C15.44 6.09001 13.12 3.87001 10.32 3.53001C6.09002 3.01001 2.53002 6.57001 3.05002 10.8C3.39002 13.6 5.61002 15.92 8.39002 16.39C10.42 16.73 12.33 16.11 13.73 14.91L14 15.19V15.98L18.25 20.23C18.66 20.64 19.33 20.64 19.74 20.23C20.15 19.82 20.15 19.15 19.74 18.74L15.5 14.48ZM9.50002 14.48C7.01002 14.48 5.00002 12.47 5.00002 9.98001C5.00002 7.49001 7.01002 5.48001 9.50002 5.48001C11.99 5.48001 14 7.49001 14 9.98001C14 12.47 11.99 14.48 9.50002 14.48Z"
              fill="#9A9AB0"
            />
          </svg>
        </SearchIcon>
        <SearchInput placeholder="Поиск ..."></SearchInput>
      </SearchInputBlock>
      <SearchButtons>
        <ViewIcon>
          <svg
            width="28"
            height="23"
            viewBox="0 0 28 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.6721 17.3596H14.9173C15.5348 17.3596 16.0399 16.9463 16.0399 16.4411C16.0399 15.936 15.5348 15.5227 14.9173 15.5227H12.6721C12.0546 15.5227 11.5494 15.936 11.5494 16.4411C11.5494 16.9463 12.0546 17.3596 12.6721 17.3596ZM3.69104 7.25669C3.69104 7.76183 4.19622 8.17513 4.81367 8.17513H22.7757C23.3931 8.17513 23.8983 7.76183 23.8983 7.25669C23.8983 6.75154 23.3931 6.33824 22.7757 6.33824H4.81367C4.19622 6.33824 3.69104 6.75154 3.69104 7.25669ZM8.18155 12.7674H19.4078C20.0253 12.7674 20.5304 12.3541 20.5304 11.8489C20.5304 11.3438 20.0253 10.9305 19.4078 10.9305H8.18155C7.5641 10.9305 7.05892 11.3438 7.05892 11.8489C7.05892 12.3541 7.5641 12.7674 8.18155 12.7674Z"
              fill="#9A9AB0"
            />
          </svg>
        </ViewIcon>
        <TableIcon onClick={openSideBarConfig}>
          <svg
            width="28"
            height="23"
            viewBox="0 0 28 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.6997 8.17514C14.9346 8.17514 15.945 7.34854 15.945 6.33825C15.945 5.32796 14.9346 4.50136 13.6997 4.50136C12.4648 4.50136 11.4545 5.32796 11.4545 6.33825C11.4545 7.34854 12.4648 8.17514 13.6997 8.17514ZM13.6997 10.012C12.4648 10.012 11.4545 10.8386 11.4545 11.8489C11.4545 12.8592 12.4648 13.6858 13.6997 13.6858C14.9346 13.6858 15.945 12.8592 15.945 11.8489C15.945 10.8386 14.9346 10.012 13.6997 10.012ZM13.6997 15.5227C12.4648 15.5227 11.4545 16.3493 11.4545 17.3596C11.4545 18.3699 12.4648 19.1965 13.6997 19.1965C14.9346 19.1965 15.945 18.3699 15.945 17.3596C15.945 16.3493 14.9346 15.5227 13.6997 15.5227Z"
              fill="#9A9AB0"
            />
          </svg>
        </TableIcon>
      </SearchButtons>
    </SearchBlock>
  );
};
