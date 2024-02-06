interface TVChannel {
    channelName: string;
    userId: number;
    channelRankByUser: number; // 1-10
    isSubscribed: boolean;
}

const tvChannels: TVChannel[] = [
    { channelName: 'HBO', userId: 1, channelRankByUser: 7, isSubscribed: true },
    {
        channelName: 'Netflix',
        userId: 2,
        channelRankByUser: 9,
        isSubscribed: true,
    },
    { channelName: 'HBO', userId: 3, channelRankByUser: 5, isSubscribed: false },
    {
        channelName: 'Amazon Prime Video',
        userId: 4,
        channelRankByUser: 8,
        isSubscribed: true,
    },
    {
        channelName: 'Disney+',
        userId: 5,
        channelRankByUser: 6,
        isSubscribed: false,
    },
    {
        channelName: 'Netflix',
        userId: 6,
        channelRankByUser: 10,
        isSubscribed: true,
    },
    { channelName: 'HBO', userId: 7, channelRankByUser: 4, isSubscribed: false },
    { channelName: 'Hulu', userId: 8, channelRankByUser: 3, isSubscribed: true },
    { channelName: 'Hulu', userId: 9, channelRankByUser: 2, isSubscribed: false },
    {
        channelName: 'Amazon Prime Video',
        userId: 10,
        channelRankByUser: 1,
        isSubscribed: true,
    },
    {
        channelName: 'Disney+',
        userId: 11,
        channelRankByUser: 10,
        isSubscribed: true,
    },
    { channelName: 'HBO', userId: 12, channelRankByUser: 7, isSubscribed: true },
];

type SubscribedChannelsRating = Record<string, number>;

const uniqueSubscribedChannelsNames = Array.from(
    new Set(
        tvChannels
            .filter((channel) => channel.isSubscribed)
            .map((channel) => channel.channelName),
    ),
).sort((a, b) => a.localeCompare(b));

console.log({ uniqueSubscribedChannelsNames });
