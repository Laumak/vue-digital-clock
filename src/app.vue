<template>
    <div class="clock-wrapper">
        <p class="date">{{ day }} {{ month }} {{ year }}</p>

        <div class="clock">
            <h1>
                {{ hours }}:{{ minutes }}:{{ seconds }}
            </h1>
        </div>
    </div>
</template>

<script>
    import moment from "moment";

    moment.locale("fi");

    export default {
        created() {
            setInterval(() => {
                this.time = moment();
            }, 1000);
        },
        data() {
            return {
                time: moment()
            }
        },
        computed: {
            seconds() {
                return moment(this.time).format("ss");
            },
            minutes() {
                return moment(this.time).format("mm");
            },
            hours() {
                return moment(this.time).format("HH");
            },
            day() {
                return moment(this.time).format("DD");
            },
            month() {
                return moment(this.time).format("MMMM") + "ta";
            },
            year() {
                return moment(this.time).format("YYYY");
            }
        }
    }
</script>

<style lang="sass">
    * {
        margin: 0;
        padding: 0;
    }
    html, body {
        font-family: "Oswald", sans-serif;
        height: 100%;
        font-size: 18px;
        background-color: #35434d;
        color: white;
    }
    .clock-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        height: 100%;
    }
    .date {
        font-size: 1.5rem;
    }
    .clock {
        border: 6px solid white;
        padding: 10px 30px;
        text-align: left;
    }
    h1 {
        font-size: 5rem;
        margin: 0 auto;
        padding: 0;
        text-shadow: 2px 2px #595959;
    }
</style>
