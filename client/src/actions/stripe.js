import axios from 'axios';

export const createConnectAccount = async (token) => 
    await axios.post(`${process.env.REACT_APP_API}/create-connect-account`, {}, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

export const getAccountStatus = async (token) => 
    axios.post(`${process.env.REACT_APP_API}/get-account-status`, {}, {
    headers: {
        Authorization: `Bearer ${token}`,
    }
})

export const getAccountBalance = async (token) => 
    axios.post(
        `${process.env.REACT_APP_API}/get-account-balance`, 
        {}, 
        {
    headers: {
        Authorization: `Bearer ${token}`,
    }
});

export const currencyFormatter = (data) => {
    return (data.amount/100).toLocaleString(data.currency, {
        style: 'currency',
        currency: data.currency,
    });
};

export const payoutSetting = async (token) => 
    await axios.post(`${process.env.REACT_APP_API}/payout-settings`, {}, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

export const getSessionId = async (token, roomId, roomdate) => 
    await axios.post(`${process.env.REACT_APP_API}/stripe-session-id`, {
        roomId, roomdate
    }, 
    {
    headers: {
        Authorization: `Bearer ${token}`,
    },
}
)

export const stripeSuccessRequest = async (token, roomId, roomdate) => 
    await axios.post(
        `${process.env.REACT_APP_API}/stripe-success`, {roomId, roomdate},
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
);