export const handlePending = state => {
    state.isLoading = true;
  };
  export const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  };
  export const handleFulfilledErrorLoading = state => {
    state.isLoading = false;
    state.error = null;
  }