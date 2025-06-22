import IpHistory from "../models/ipHistoryModel";

export const getIpHistory = async (req, res) => {
    try {
        const ipHistory = await IpHistory.findOne({
            where: {id: req.params.id}
        });
        if (!ipHistory) {
            return res.status(404).json({message: "Ip History not found"});
        }
        res.status(200).json(ipHistory);
    } catch (error) {
        res.error(500).json({message: "Internal Server Error getting ip history"});
    }
};

export const getIpHistories = async (req, res) => {
    try {
        const ipHistories = await IpHistory.findAll();
        if (!ipHistories) {
            return res.status(404).json({message: "Ip Histories not found"});
        }
        res.status(200).json(ipHistories);
    } catch (error) {
        res.error(500).json({message: "Internal Server Error getting ip histories"});
    }
};

export const createIpHistory = async (req, res) => {
    try {
        const ipHistory = await IpHistory.create(req.body);
        if (!ipHistory) {
            return res.status(404).json({message: "Ip History not created"});
        }
        res.status(200).json(ipHistory);
    } catch (error) {
        res.error(500).json({message: "Internal Server Error creating ip history"});
    }
};

export const updateIpHistory = async (req, res) => {
    try {
        const ipHistory = await IpHistory.update(req.body, {
            where: {id: req.params.id}
        });
        if (!ipHistory) {
            return res.status(404).json({message: "Ip History not updated"});
        }
        res.status(200).json(ipHistory);
    } catch (error) {
        res.error(500).json({message: "Internal Server Error updating ip history"});
    }
};

export const deleteIpHistory = async (req, res) => {
    try {
        const ipHistory = await IpHistory.destroy({
            where: {id: req.params.id}
        });
        if (!ipHistory) {
            return res.status(404).json({message: "Ip History not deleted"});
        }
        res.status(200).json(ipHistory);
    } catch (error) {
        res.error(500).json({message: "Internal Server Error deleting ip history"});
    }
};