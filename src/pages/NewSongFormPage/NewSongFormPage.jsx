import NewSongForm from "../../components/Forms/NewSongForm"

const NewSongFormPage = () => {
    return (
        <section className="NewSongFormPage">
            <h1>Add new song</h1>
            {<NewSongForm />}
        </section>
    )
}

export default NewSongFormPage