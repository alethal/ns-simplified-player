export const setUserNATSCode = ({nats_code: nats}) => {
	localStorage.setItem("nats_code", nats);
}

export const getUserNATSCode = () => {
	return localStorage.getItem("nats_code") || undefined;
}
