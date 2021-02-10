import React from "react";

const FullScreenButton = ({ onFullScreen }) => {
  const styles = {
    cursor: "pointer",
  };



  return (
    <div style={styles} onClick={() => onFullScreen()}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="12" fill="black" fill-opacity="0.8" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.18859 11.878C6.98356 11.6774 6.65145 11.687 6.42017 11.9133C6.34222 11.9896 6.28855 12.0819 6.26178 12.1811L6.24408 12.2823L5.89648 17.5838L5.90645 17.6879L5.93817 17.7868C5.96635 17.8608 5.99934 17.9114 6.04708 17.9581C6.1317 18.0409 6.24338 18.0903 6.37417 18.0976L6.47573 18.0951L11.8556 17.7598L11.9504 17.7414L12.058 17.6978C12.1213 17.6679 12.1691 17.6347 12.2142 17.5905C12.4211 17.3879 12.4519 17.1058 12.3337 16.9242L12.2825 16.8612L12.243 16.8199L12.1712 16.7664L12.1063 16.7357L12.0224 16.7072C11.9887 16.6979 11.9564 16.6922 11.9305 16.6894L11.8969 16.6875L7.03142 16.9866L7.33499 12.3059L7.3411 12.2453L7.32983 12.1418L7.2973 12.046C7.27809 11.9978 7.257 11.9596 7.23119 11.9259L7.18859 11.878ZM17.5241 5.90489L12.1442 6.24011L12.0495 6.25852L11.9418 6.30212C11.8785 6.33209 11.8308 6.36528 11.7856 6.40943C11.5787 6.61202 11.5479 6.89418 11.6661 7.07577L11.7173 7.1388L11.7568 7.18005L11.8286 7.23357L11.8935 7.26427L11.9774 7.29272C12.0111 7.30208 12.0434 7.30779 12.0693 7.31053L12.1026 7.3125L16.9661 7.01102L16.6648 11.6942L16.6587 11.7546L16.67 11.8581L16.7025 11.954C16.7313 12.0262 16.7644 12.0761 16.8112 12.1219C17.0163 12.3226 17.3484 12.313 17.5796 12.0867C17.6576 12.0103 17.7113 11.918 17.738 11.8188L17.7557 11.7177L18.1033 6.41615L18.0934 6.31205L18.0616 6.21314C18.0335 6.13917 18.0004 6.08853 17.9523 6.04146C17.868 5.95897 17.7564 5.90964 17.6256 5.90234L17.5241 5.90489Z"
          fill="#AEAEAE"
        />
      </svg>
    </div>
  );
};

export default FullScreenButton;
