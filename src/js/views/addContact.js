import React from "react";

export const AddContact = () => {
    return (
        <div className="text-center mt-5">

            <div className="p-5">
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">@</span>
                    <input type="text" className="form-control" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1" />
                </div>

                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Email" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <span className="input-group-text" id="basic-addon2">@example.com</span>
                </div>

                <div className="mb-3">

                    <div className="input-group">
                        <span className="input-group-text" id="basic-addon3">IMG URL</span>
                        <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
                    </div>


                </div>
                <div className="mb-3">

                    <div className="input-group">
                        <span className="input-group-text" id="basic-addon3">Address</span>
                        <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
                    </div>


                </div>
                <div className="mb-3">

                    <div className="input-group">
                        <span className="input-group-text" id="basic-addon3">Phone</span>
                        <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
                    </div>


                </div>

            </div>

        </div>
    );
};
