import React from "react";
import { Skeleton } from "@mui/material";

export default function Loading() {
  return (
    <div className="row">
      {[...Array(16)].map((i) => (
        <div key={i} className="col-md-3 p-2">
          <div className="card" style={{ height: "auto", objectFit: "cover" }}>
            <Skeleton variant="text" sx={{ fontSize: "1rem" }} />

            {/* For other variants, adjust the size with `width` and `height` */}
            <Skeleton variant="circular " width={40} height={40} />
            <Skeleton variant="rectangular" width={210} height={80} />
            <Skeleton variant="rounded" width={210} height={60} />
            <div className="card-body">
              <h5
                className="card-title"
                style={{ color: "grey", fontWeight: "bolder" }}>
                Loading...!
              </h5>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
